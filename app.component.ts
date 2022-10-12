import {
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { extend } from '@syncfusion/ej2-base';
import {
  TimelineViewsService,
  AgendaService,
  GroupModel,
  EventSettingsModel,
  ResizeService,
  DragAndDropService,
  ScheduleComponent,
  TimelineMonthService,
  Schedule,
  YearService,
  TimelineYearService,
} from '@syncfusion/ej2-angular-schedule';
import { timelineResourceData, resourceData } from './data';
import { ScheduleConfig } from './schedule-config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [],
  providers: [
    TimelineViewsService,
    TimelineMonthService,
    YearService,
    TimelineYearService,
  ],
})
export class AppComponent {
  @ViewChild('scheduleObj') public scheduleObj: ScheduleComponent;
  scheduleInit: any = new ScheduleConfig();
  public eventSettings: EventSettingsModel = {
    dataSource: [],
    // Permet de supprimer les sespaces blancs dans les cases du calendrier https://www.syncfusion.com/forums/148781/schedule-timeline-auto-row-height-bottom-margin
    ignoreWhitespace: true,
  };

  constructor(private hostElement: ElementRef) {}
  ngAfterViewInit(): void {
    this.scheduleInit = new ScheduleConfig();
    this.scheduleInit.appendToProject();
    console.log(this.scheduleObj);
  }

  public isReadOnly(endDate: Date): boolean {
    return endDate < new Date(2021, 6, 31, 0, 0);
  }
}
