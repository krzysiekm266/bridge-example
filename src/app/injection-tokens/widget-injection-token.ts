import { InjectionToken } from "@angular/core"
import { WidgetInt } from "../api/widget-api"

export const WIDGET = new InjectionToken<WidgetInt>('Widget');
