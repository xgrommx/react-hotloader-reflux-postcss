import request from 'superagent';
import ExampleActions from 'actions-example';

ExampleActions.getData.listen(() => {
    request.get('/')
        .query({})
        .end((res) => {
            if (res.body.errorcode) {
                return ExampleActions.getDataFailed(res.text);
            }
            ExampleActions.getDataCompleted()
        })
})
