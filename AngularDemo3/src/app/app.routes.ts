import { Routes } from '@angular/router';
import { SignalsDemo } from './signals-demo/signals-demo';
import { ChangeDetectionDemo } from './change-detection-demo/change-detection-demo';
import { ChangeDetection2 } from './change-detection2/change-detection2';
import { Adminpage } from './adminpage/adminpage';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'admin-page', component: Adminpage },

  {
    path: 'signals-demo',
    component: SignalsDemo,
    children: [
      {
        path: 'CD1',
        component: ChangeDetectionDemo
      },
      {
        path: 'CD2',
        component: ChangeDetection2
      }
    ]
  }
];