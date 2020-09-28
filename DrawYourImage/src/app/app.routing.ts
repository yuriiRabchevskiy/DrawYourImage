import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', loadChildren: () => import('./Main/main.module').then(m => m.MainModule) },
    { path: '**', loadChildren: () => import('./Main/main.module').then(m => m.MainModule) },
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
