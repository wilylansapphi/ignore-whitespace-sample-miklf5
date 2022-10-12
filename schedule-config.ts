import { ScheduleModel, ViewsModel } from '@syncfusion/ej2-schedule';
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
} from '@syncfusion/ej2-angular-schedule';

export const views: ViewsModel[] = [
  {
    option: 'TimelineDay',
    timeScale: { slotCount: 1 },
    allowVirtualScrolling: false,
  },
  {
    option: 'TimelineWeek',
    allowVirtualScrolling: false,
  },
  {
    option: 'TimelineMonth',
    allowVirtualScrolling: false,
  },
  {
    option: 'TimelineMonth',
    displayName: 'Quadrimestre',
    interval: 4,
    allowVirtualScrolling: false,
  },
  {
    option: 'TimelineMonth',
    displayName: 'Semestre',
    interval: 6,
    allowVirtualScrolling: false,
  },
  {
    option: 'TimelineMonth',
    displayName: 'Année',
    interval: 12,
    allowVirtualScrolling: false,
  },
];

const scheduleConfig: ScheduleModel = {
  width: '100%',
  height: '550px',
  // locale: 'fr-CH',
  selectedDate: new Date(),
  views: views,
  currentView: 'TimelineMonth',
  firstDayOfWeek: 1,
  rowAutoHeight: true,
};
export class ScheduleConfig {
  private _scheduleConfig: Schedule;

  get scheduleObj() {
    return this._scheduleConfig;
  }

  set scheduleConf(scheduleConf: ScheduleModel) {
    this._scheduleConfig = new Schedule(scheduleConf);
  }

  constructor() {
    this.createSchedule(scheduleConfig);
    // this.scheduleProvider();
  }

  private createSchedule(scheduleConf: ScheduleModel) {
    this._scheduleConfig = new Schedule(scheduleConf);
  }

  public addConfig(confItem: string, configValue) {
    this._scheduleConfig[confItem] = configValue;
  }
  appendToProject() {
    this._scheduleConfig.appendTo('#Schedule');
  }

  // scheduleProvider() {
  //   Schedule.Inject(TimelineViewsService, TimelineMonthService);
  // }
}
