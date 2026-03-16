import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface Message { role: 'user' | 'assistant'; content: string; timestamp: Date; }

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('messagesEnd') messagesEnd!: ElementRef;
  @ViewChild('inputRef') inputRef!: ElementRef;

  messages: Message[] = [];
  inputText = '';
  isLoading = false;
  sessionId = '';

  suggestions = [
    'Can my landlord withhold my security deposit?',
    'What are my rights if I am wrongfully terminated?',
    'How do I file a consumer complaint?',
    'What is the notice period for resigning?',
    'Can police arrest without a warrant in India?',
    'How do I register an FIR online?'
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).slice(2, 9);
    this.messages.push({
      role: 'assistant',
      content: '👋 Hello! I am LexAI, your AI legal assistant. I can help you understand your rights under Indian law, explain legal documents, and guide you through common legal situations.\n\nWhat legal question can I help you with today?',
      timestamp: new Date()
    });
  }

  ngAfterViewChecked() { this.scrollToBottom(); }

  scrollToBottom() {
    try { this.messagesEnd?.nativeElement.scrollIntoView({ behavior: 'smooth' }); } catch {}
  }

  async sendMessage() {
    if (!this.inputText.trim() || this.isLoading) return;
    const userMsg = this.inputText.trim();
    this.inputText = '';
    this.messages.push({ role: 'user', content: userMsg, timestamp: new Date() });
    this.isLoading = true;

    const history = this.messages.slice(0, -1).map(m => ({ role: m.role, content: m.content }));

    this.http.post<any>(`${environment.apiUrl}/api/chat/message`, {
      message: userMsg, sessionId: this.sessionId, history
    }).subscribe({
      next: (res) => {
        this.messages.push({ role: 'assistant', content: res.response, timestamp: new Date() });
        this.isLoading = false;
      },
      error: () => {
        this.messages.push({ role: 'assistant', content: 'Sorry, I encountered an error. Please try again.', timestamp: new Date() });
        this.isLoading = false;
      }
    });
  }

  useSuggestion(s: string) { this.inputText = s; this.inputRef?.nativeElement.focus(); }

  onKeyDown(e: KeyboardEvent) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); this.sendMessage(); } }

  formatMessage(content: string): string {
    return content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
  }
}
