import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-document-analyzer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './document-analyzer.component.html',
  styleUrls: ['./document-analyzer.component.scss']
})
export class DocumentAnalyzerComponent {
  documentText = '';
  analysisType = 'general';
  isLoading = false;
  analysis = '';
  riskLevel = '';

  analysisTypes = [
    { id: 'general', label: 'General Analysis', icon: '📋' },
    { id: 'contract', label: 'Contract Review', icon: '🤝' },
    { id: 'rental', label: 'Rental Agreement', icon: '🏠' },
    { id: 'employment', label: 'Employment Doc', icon: '💼' }
  ];

  constructor(private http: HttpClient) {}

  analyze() {
    if (!this.documentText.trim() || this.isLoading) return;
    this.isLoading = true;
    this.analysis = '';

    this.http.post<any>(`${environment.apiUrl}/api/document/analyze`, {
      content: this.documentText,
      analysisType: this.analysisType,
      sessionId: 'doc_' + Date.now()
    }).subscribe({
      next: (res) => {
        this.analysis = res.analysis;
        this.riskLevel = res.riskLevel;
        this.isLoading = false;
      },
      error: () => {
        this.analysis = 'Analysis failed. Please try again.';
        this.isLoading = false;
      }
    });
  }

  formatAnalysis(text: string): string {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
  }

  getRiskBadgeClass() {
    return this.riskLevel === 'safe' ? 'badge-green' : this.riskLevel === 'high-risk' ? 'badge-red' : 'badge-yellow';
  }

  getRiskLabel() {
    return this.riskLevel === 'safe' ? '✅ Safe' : this.riskLevel === 'high-risk' ? '🚨 High Risk' : '⚠️ Needs Review';
  }

  clearAll() {
    this.documentText = '';
    this.analysis = '';
    this.riskLevel = '';
  }
}
