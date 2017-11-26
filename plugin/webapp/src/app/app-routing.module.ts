import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRouteNames } from "./app-route-names";
import { AthleteSettingsComponent } from "./athlete-settings/athlete-settings.component";
import { CommonSettingsComponent } from "./common-settings/common-settings.component";
import { ZonesSettingsComponent } from "./zones-settings/zones-settings.component";
import { FitnessTrendGraphComponent } from "./fitness-trend/fitness-trend-graph.component";

export const routes: Routes = [
	{path: appRouteNames.fitnessTrend, component: FitnessTrendGraphComponent},
	{path: appRouteNames.commonSettings, component: CommonSettingsComponent},
	{path: appRouteNames.athleteSettings, component: AthleteSettingsComponent},
	{path: appRouteNames.zonesSettings, component: ZonesSettingsComponent},
	{path: appRouteNames.zonesSettings + "/:zoneValue", component: ZonesSettingsComponent},
	{path: '', redirectTo: appRouteNames.commonSettings, pathMatch: 'full'},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {enableTracing: false, useHash: true})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}