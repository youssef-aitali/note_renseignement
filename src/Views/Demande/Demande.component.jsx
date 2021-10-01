import React from 'react';
import Header from '../../components/Header/Header.component';
import DemandeurForm from '../DemandeurForm/DemandeurForm.component';
import ParcelleForm from '../ParcelleForm/ParcelleForm.component';
import './Demande.styles.scss';
import { Route, Switch, Redirect } from 'react-router-dom';

const Demande = () => {

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={DemandeurForm} />
                <Route path="/parcelleForm" component={ParcelleForm} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default Demande;