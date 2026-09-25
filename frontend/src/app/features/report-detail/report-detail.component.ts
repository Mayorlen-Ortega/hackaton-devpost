import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { Report } from '../../core/models';

@Component({ selector: 'app-report-detail', imports: [CommonModule, RouterLink], templateUrl: './report-detail.component.html', styleUrl: './report-detail.component.scss' })
export class ReportDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly api = inject(ApiService);
  report?: Report;
  matches: unknown[] = [];
  created = false;
  loading = true;
  error = '';
  ngOnInit(): void { const id = this.route.snapshot.paramMap.get('id') ?? ''; this.created = this.route.snapshot.queryParamMap.get('created') === '1'; this.api.getReport(id).subscribe({ next: (report) => { this.report = report; this.loading = false; }, error: () => { this.error = 'We could not find that report.'; this.loading = false; } }); this.api.getMatches(id).subscribe({ next: (matches) => this.matches = matches }); }
  imageUrl(filename: string): string { return this.api.imageUrl(filename); }
}
