import React, { Component } from 'react';
import Header from '../../components/Header/Header.component';
import Processus from '../../components/Processus/Processus.component';
import FormInput from '../../components/FormInput/FormInput.component';
import './Demande.styles.scss';

class Demande extends Component {

    constructor() {
        super();
        this.state = {
            nom: '',
            prenom: '',
            adresse: '',
            cin: '',
            email: '',
            qualite_demandeur: '',
            telephone: '',
            est_proprietaire: true,
            mode_remise: '',
            nature_projet: '',
            type_foncier: '',
            reference_fonciere: '',
        }
    }

    handleChange = event => {

        const { name, type, checked } = event.target;
        const value = type === 'checkbox' ? checked : event.target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {

        event.preventDefault();
        console.log(this.state);

    }

    render() {
        return (
            <div>
                <Header />
                {/* <Processus /> */}
                <div className="container shadow p-5 mb-5 bg-body rounded mt-5">
                    <h2 className="mb-5">Informations du demandeur</h2>
                    <form onSubmit= {this.handleSubmit}>
                        <div className="row gy-2">
                            <div className="col-6">
                                <FormInput 
                                        name="nom"
                                        type="text" 
                                        placeholder="Nom"
                                        value = { this.state.nom }
                                        handleChange = { this.handleChange }
                                        required
                                    />
                            </div>
                            <div className="col-6">
                                <FormInput 
                                    name="prenom"
                                    type="text" 
                                    placeholder="Prénom"
                                    value = { this.state.prenom }
                                    handleChange = { this.handleChange }
                                    required
                                />
                            </div>
                            <div className="col-12">
                                <FormInput 
                                        name="adresse"
                                        type="text" 
                                        placeholder="Adresse"
                                        value = { this.state.adresse }
                                        handleChange = { this.handleChange }
                                        required
                                />
                            </div>
                            <div className="col-6">
                                <FormInput 
                                        name="cin"
                                        type="text" 
                                        placeholder="Carte d'Identité Nationale"
                                        value = { this.state.cin }
                                        handleChange = { this.handleChange }
                                        required
                                />
                            </div>
                            <div className="col-6">
                                <FormInput 
                                        name="telephone"
                                        type="text"
                                        placeholder="Téléphone"
                                        value = { this.state.telephone }
                                        handleChange = { this.handleChange }
                                        required
                                />
                            </div>
                            <div className="col-6">
                                <select 
                                        className="form-select"
                                        name = "mode_remise"
                                        value = { this.state.mode_remise }
                                        onChange = { this.handleChange }
                                        required
                                >
                                    <option defaultValue="">Mode de remise</option>
                                    <option value="En personne">En personne</option>
                                    <option value="Courrier">Courrier</option>
                                    <option value="Email">Email</option>
                                </select>
                            </div>
                            {
                                this.state.mode_remise === "Email"
                                ?
                                (
                                    <div className="col-6">
                                        <FormInput 
                                                name="email"
                                                type="text" 
                                                placeholder="Email"
                                                value = { this.state.email }
                                                handleChange = { this.handleChange }
                                                required
                                        />
                                    </div>
                                )
                                :
                                null
                            }
                            <div className="col-6">
                                <select 
                                        className="form-select" 
                                        name = "qualite_demandeur"
                                        value = { this.state.qualite_demandeur } 
                                        onChange = { this.handleChange }
                                >
                                    <option value="">Qualité du demandeur</option>
                                    <option value="Individu">Individu</option>
                                    <option value="Architecte">Architecte</option>
                                    <option value="Autre">Autre</option>
                                </select>
                            </div>
                            <div className="col-6">
                                <div className="form-check form-switch">
                                    <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            id="flexSwitchCheckChecked" 
                                            defaultChecked={this.state.est_proprietaire} 
                                            name="est_proprietaire"
                                            value = { this.state.est_proprietaire }
                                            onChange = { this.handleChange }
                                    />
                                    <label 
                                            className="form-check-label" 
                                            htmlFor="flexSwitchCheckChecked">Vous êtes propriétaire ?
                                    </label>
                                </div>
                            </div>
                            <div className="col-6">
                                <FormInput 
                                        name="nature_projet"
                                        type="text"
                                        placeholder="Nature du projet envisagé"
                                        value = { this.state.nature_projet }
                                        handleChange = {this.handleChange}
                                />
                            </div>
                            <div className="col-6">
                                <select 
                                        className="form-select"
                                        name = 'type_foncier'
                                        value = { this.state.type_foncier }
                                        onChange = { this.handleChange }
                                >
                                    <option defaultValue="">Type du foncier</option>
                                    <option value="Non immatriculé">Non immatriculé</option>
                                    <option value="TF">Immatriculé</option>
                                    <option value="R">Réquisition</option>
                                </select>
                            </div>
                            {
                                this.state.type_foncier === "Non immatriculé" 
                                ?
                                null
                                :
                                (<div className="col-6">
                                    <FormInput 
                                            name="reference_fonciere"
                                            type="text"
                                            placeholder="Référence foncière"
                                            value = { this.state.reference_fonciere }
                                            handleChange = {this.handleChange}
                                    />
                                </div>)
                            }
                        </div>
                        <div className="buttons mt-5">
                            <button type="submit" className="btn btn-primary">Suivant</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Demande;