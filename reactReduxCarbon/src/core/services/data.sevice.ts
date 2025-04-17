import { BehaviorSubject } from 'rxjs';
const bSubject = new BehaviorSubject({});
export const DataService = {
  setData: (data: any) => bSubject.next({ data }),
  getData: () => bSubject.asObservable()
};
