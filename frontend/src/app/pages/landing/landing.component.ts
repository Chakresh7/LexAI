import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements AfterViewInit {

  features = [
    { icon: '⚖️', title: 'Legal Chat Assistant', desc: 'Ask any legal question in plain language. Get answers backed by Indian law — IPC, CrPC, Consumer Protection Act, and more.', tag: 'AI Powered', route: '/chat' },
    { icon: '📄', title: 'Document Analyzer', desc: 'Paste or upload any legal document. Get red flags, plain English summary, and risk assessment in seconds.', tag: 'Smart Analysis', route: '/analyze' },
    { icon: '📝', title: 'Legal Templates', desc: 'Generate professional legal documents — rent agreements, NDAs, legal notices, freelance contracts, and more.', tag: '6+ Templates', route: '/templates' }
  ];

  stats = [
    { number: '50+', label: 'Legal Areas Covered' },
    { number: '6', label: 'Document Templates' },
    { number: '100%', label: 'Free to Use' },
    { number: '<2s', label: 'Response Time' }
  ];

  legalAreas = [
    'Tenant Rights', 'Employment Law', 'Consumer Rights', 'Contract Law',
    'Property Disputes', 'Cyber Law', 'Family Law', 'RTI', 'Startup Legal',
    'Criminal Law Basics', 'Labour Law', 'IP Rights'
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
}
