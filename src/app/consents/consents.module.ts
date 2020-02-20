import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsentsComponent } from './consents.component';
import { ActiveComponent } from './active/active.component';
import { TempComponent } from './temp/temp.component';

const routes: Routes = [
    {
        path: 'consent', component: ConsentsComponent,
        children: [
            {
                path: 'active', component: ActiveComponent
            },
            {
                path: 'temp', component: TempComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        ConsentsComponent,
        ActiveComponent,
        TempComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class ConsentsModule { }