
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cadastrados from './pages/cadastrados';
import Error from './pages/error';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Cadastrados} />
                <Route path="*" component={Error} />
            </Switch>
        </BrowserRouter>
    )
}