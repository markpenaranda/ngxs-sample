import { Test } from 'src/models/test.model';
import { State, Action, Select, StateContext, Selector } from '@ngxs/store';
import { TestService } from 'src/services/test.service';
import { LoadTestAction } from './test.action';
import { tap } from 'rxjs/operators';

export interface TestStateModel {
    data: Test [],
    view: Test,
    loading: boolean 
    loaded: boolean 
    currentPage: number 
    totalSize: number 
    totalPage: number
    processing: boolean
    errorMessage: string
}


@State<TestStateModel>({
    name: 'membership',
    defaults : {
        data: [],
        view: null,
        loading: false,
        loaded: false, 
        currentPage: 0, 
        totalSize: 0, 
        totalPage: 0, 
        processing: false,
        errorMessage: null
    }
}) 
export class TestState {

    constructor(private testService: TestService) {}

    @Selector()
    static data(state: TestStateModel) {
        return state.data
    }

    @Action(LoadTestAction)
    loadMemberships(ctx: StateContext<TestStateModel>, action: LoadTestAction) {
        
        const state = ctx.getState()
        ctx.setState({
            ...state,
            loading: true
        })
     
        return this.testService.$all().pipe(
            tap(data => {

                ctx.setState({
                    ...state,
                    data: data,
                    loading: false,
                    loaded: true
                })
                
            })
        )
    }

}