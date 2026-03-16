import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/landing/landing.component').then(m => m.LandingComponent) },
  { path: 'chat', loadComponent: () => import('./pages/chat/chat.component').then(m => m.ChatComponent) },
  { path: 'analyze', loadComponent: () => import('./pages/document-analyzer/document-analyzer.component').then(m => m.DocumentAnalyzerComponent) },
  { path: 'templates', loadComponent: () => import('./pages/templates/templates.component').then(m => m.TemplatesComponent) },
  { path: '**', redirectTo: '' }
];
