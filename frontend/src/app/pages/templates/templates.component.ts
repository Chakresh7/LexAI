import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface Template {
  id: string;
  name: string;
  icon: string;
  description: string;
  fields: string[];
}

@Component({
  selector: 'app-templates',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {
  templates: Template[] = [];
  selectedTemplate: Template | null = null;
  formData: Record<string, string> = {};
  isLoading = false;
  isModalOpen = false;
  generatedContent = '';
  copySuccess = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Template[]>(`${environment.apiUrl}/api/templates/list`).subscribe({
      next: (data) => this.templates = data,
      error: () => {
        this.templates = [
          { id: 'rent-agreement', name: 'Rent Agreement', icon: '🏠', description: 'Standard residential lease agreement', fields: ['landlordName', 'tenantName', 'propertyAddress', 'monthlyRent', 'depositAmount', 'duration'] },
          { id: 'nda', name: 'Non-Disclosure Agreement', icon: '🔒', description: 'Confidentiality agreement for business', fields: ['partyA', 'partyB', 'purpose', 'duration'] },
          { id: 'freelance-contract', name: 'Freelance Contract', icon: '💼', description: 'Service agreement for freelancers', fields: ['clientName', 'freelancerName', 'projectDescription', 'amount', 'deadline'] },
          { id: 'legal-notice', name: 'Legal Notice', icon: '⚠️', description: 'Formal legal notice to any party', fields: ['senderName', 'recipientName', 'subject', 'grievance', 'demand'] },
          { id: 'consumer-complaint', name: 'Consumer Complaint', icon: '📋', description: 'Complaint to consumer forum', fields: ['complainantName', 'oppositeParty', 'productService', 'issue', 'relief'] },
          { id: 'employment-offer', name: 'Employment Offer Letter', icon: '🤝', description: 'Job offer letter template', fields: ['companyName', 'candidateName', 'position', 'salary', 'joiningDate'] }
        ];
      }
    });
  }

  openModal(template: Template) {
    this.selectedTemplate = template;
    this.formData = {};
    template.fields.forEach(f => this.formData[f] = '');
    this.generatedContent = '';
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedTemplate = null;
    this.generatedContent = '';
  }

  formatFieldLabel(field: string): string {
    return field.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase());
  }

  generate() {
    if (!this.selectedTemplate || this.isLoading) return;
    this.isLoading = true;
    this.generatedContent = '';

    this.http.post<any>(`${environment.apiUrl}/api/templates/generate`, {
      templateType: this.selectedTemplate.name,
      details: this.formData
    }).subscribe({
      next: (res) => {
        this.generatedContent = res.content;
        this.isLoading = false;
      },
      error: () => {
        this.generatedContent = 'Generation failed. Please try again.';
        this.isLoading = false;
      }
    });
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.generatedContent).then(() => {
      this.copySuccess = true;
      setTimeout(() => this.copySuccess = false, 2000);
    });
  }

  printDocument() {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html><head><title>${this.selectedTemplate?.name}</title>
        <style>body { font-family: 'Segoe UI', sans-serif; padding: 40px; line-height: 1.8; white-space: pre-wrap; }</style>
        </head><body>${this.generatedContent}</body></html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  }
}
