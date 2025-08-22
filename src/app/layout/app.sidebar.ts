import { CommonModule } from '@angular/common';
import { Component, ElementRef, model, OnInit } from '@angular/core';
import { linkedSignalSetFn } from '@angular/core/primitives/signals';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [CommonModule, ButtonModule, RouterModule, TooltipModule, DividerModule, AvatarModule],
	templateUrl: './app.sidebar.html'
})
export class AppSidebar implements OnInit {
	isSlimMenu = model(true);
	userNavs: any[] = [];
	companyNavs: any[] = [];
	selectedSidebarNav: any;
	sidebarNavsMore: any[] = [];
	dashboardSidebarVisible = model(false);

	accountsNavs: any[] = [];
	selectedAccountNav: any;

	constructor(public el: ElementRef) {}
	ngOnInit(): void {

		this.sidebarNavsMore = [{ icon: 'pi pi-cog', title: 'Settings' }];
		this.userNavs = [
			{ icon: 'pi pi-home', title: 'Overview', routerLink: '/overview' },
			{ icon: 'pi pi-send', title: 'Talepler', routerLink: '/pages/requests' },
			{ icon: 'pi pi-envelope', title: 'Bilgi Talepleri(RFI) ', routerLink: '/pages/info-request' },
			{ icon: 'pi pi-history', title: 'Son Hareketler', routerLink: '/pages/recent-activity' },
			{ icon: 'pi pi-comments', title: 'Mesaj Kutusu', routerLink: '/chats' },
			{ icon: 'pi pi-list', title: 'Kısa Listeler', routerLink: '/pages/shortlists' },
			{ icon: 'pi pi-bookmark', title: 'Kaydedilenler', routerLink: '/pages/saved' }
		];
		this.companyNavs = [
			{ icon: 'pi pi-chart-bar', title: 'Analytics', routerLink: '/overview' },
			{ icon: 'pi pi-video', title: 'Videos', routerLink: '/pages/requests' },
			{ icon: 'pi pi-home', title: 'Company Profile Manager', routerLink: '/pages/recent-activity' },
			{ icon: 'pi pi-tags', title: 'Catalog Manager', routerLink: '/chats' },
			{ icon: 'pi pi-chart-line', title: 'WebTrax', routerLink: '/pages/shortlists' },
			{ icon: 'pi pi-users', title: 'Team', routerLink: '/pages/saved' }
		];
		this.accountsNavs = [
			{ id: 1, icon: 'pi pi-user', title: 'Kullanıcılar', routerLink: '/pages/user-profile' },
			{ id: 2, icon: 'pi pi-warehouse', title: 'Şirketler', routerLink: '/pages/company-profile' }
		];
		this.selectedAccountNav = this.accountsNavs[0];
		this.selectedSidebarNav = this.userNavs[0];
	}


}
