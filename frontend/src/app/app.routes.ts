import { Routes } from '@angular/router';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { ReportFormComponent } from './features/report-form/report-form.component';
import { ReportDetailComponent } from './features/report-detail/report-detail.component';

export const routes: Routes = [
	{ path: '', component: WelcomeComponent },
	{ path: 'report/new/:type', component: ReportFormComponent },
	{ path: 'reports/:id', component: ReportDetailComponent },
	{ path: '**', redirectTo: '' },
];
