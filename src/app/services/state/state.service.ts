import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IUser } from "src/app/models/user.model";

interface usersState {
    currentlySelectedUser: IUser | null,
    users: IUser[]
}

@Injectable({
    providedIn: 'root'
})
export class StateService {
    private state$: BehaviorSubject<usersState> = new BehaviorSubject<usersState>({
        currentlySelectedUser: null,
        users: []
    })

    public setUsers(users: IUser[]): void {
        const newState = {
            ...this.state$.getValue(),
            users: users
        }

        this.setStateToStorage(newState);
        this.state$.next(newState);
    }

    public setCurrentlySelectedUser(user: IUser): void {
        const newState = {
            ...this.state$.getValue(),
            currentlySelectedUser: user
        }

        this.setStateToStorage(newState);
        this.state$.next(newState);
    }

    public get state(): Observable<usersState> {
        const stateObj = this.getStateFromStorage();

        if (stateObj) {
            this.state$.next(stateObj);
        };

        return this.state$.asObservable();
    }

    private getStateFromStorage(): usersState {
        return JSON.parse(localStorage.getItem('state') as string);
    }

    private setStateToStorage(state: usersState): void {
        localStorage.setItem('state', JSON.stringify(state));
    }
}