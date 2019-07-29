import { Profile } from './profile.model';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

export class State {
    private prevState: Profile;
    private profileStoreSubject: BehaviorSubject<Profile>;
    private errorSubject: Subject<string>;
    profileStore: Observable<Profile>;
    error: Observable<string>;

    protected constructor() {
        this.profileStoreSubject = new BehaviorSubject(null);
        this.errorSubject = new Subject();
        this.profileStore = this.profileStoreSubject.asObservable();
        this.error = this.errorSubject.asObservable();
    }

    private setPrevState() {
        this.prevState = this.profileStoreSubject.getValue();
    }

    protected dismissError() {
        this.errorSubject.next(null);
    }

    protected setProfileStore(profile: Profile) {
        this.setPrevState();
        this.profileStoreSubject.next(profile);
        this.dismissError();
    }

    protected stateError(errorMessage: string) {
        this.errorSubject.next(errorMessage);
        this.profileStoreSubject.next(this.prevState);
    }
}
