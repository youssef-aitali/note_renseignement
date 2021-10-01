import React from 'react';
import { useForm } from "react-hook-form";
import configureAppStore from '../../store/configureStore';
import { ajoutInfoDemandeur } from '../../store/demande';
import './DemandeurForm.styles.scss';

const DemandeurForm = (props) => {

    const store = configureAppStore();

    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const onSubmit = formData => {

        store.dispatch(ajoutInfoDemandeur({infoDemandeur : formData}));
        console.log("Apres", store.getState());
        //props.history.push("./parcelleForm");
        
        /* const form = event.target;
        console.log(form); */

        /* if(form.checkValidity()) {
            form.classList.add('was-validated');
        } */

    }

    let isEmail_Selected = watch("mode_remise") === "Email";
    let isNonImmatricule_Selected = watch("type_foncier") === "Non immatriculé";

    return (
        <div>
                <div className="container shadow p-5 mb-5 bg-body rounded mt-5">
                    <h2 className="mb-5">Informations du demandeur</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row gy-2">
                            <div className="col-6">
                                <input 
                                        className="form-control" 
                                        type="text"
                                        {...register("nom", { required: true })} 
                                        placeholder="Nom"
                                />
                                {errors.nom && <span>This field is required</span>}
                            </div>
                            <div className="col-6">
                                <input 
                                        className="form-control" 
                                        type="text"
                                        {...register("prenom", { required: true })} 
                                        placeholder="Prénom"
                                />
                                {errors.prenom && <span>This field is required</span>}
                            </div>
                            <div className="col-12">
                                <input 
                                        className="form-control" 
                                        type="text"
                                        {...register("adresse", { required: true })} 
                                        placeholder="Adresse"
                                />
                                {errors.adresse && <span>This field is required</span>}
                            </div>
                            <div className="col-6">
                                <input 
                                        className="form-control" 
                                        type="text"
                                        {...register("cin", { required: true })} 
                                        placeholder="Carte d'Identité Nationale"
                                />
                                {errors.cin && <span>This field is required</span>}
                            </div>
                            <div className="col-6">
                                <input 
                                        className="form-control" 
                                        type="text"
                                        {...register("telephone", { required: true })} 
                                        placeholder="Téléphone"
                                />
                                {errors.telephone && <span>This field is required</span>}
                            </div>
                            <div className="col-6">
                                <select 
                                        className="form-select"
                                        {...register("mode_remise", { required: true })}
                                >
                                    <option value="">Mode de remise</option>
                                    <option value="En personne">En personne</option>
                                    <option value="Courrier">Courrier</option>
                                    <option value="Email">Email</option>
                                </select>
                                {errors.mode_remise && <span>This field is required</span>}
                            </div>
                            {
                                isEmail_Selected ? 
                                (
                                    <div className="col-6">
                                    <input 
                                            className="form-control" 
                                            type="email"
                                            {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })} 
                                            placeholder="Email"
                                    />
                                    {errors.email && <span>This field is required</span>}
                                </div>
                                )
                                :
                                null
                            }
                            
                                
                            <div className="col-6">
                                <select 
                                        className="form-select" 
                                        {...register("qualite_demandeur", { required: true })}
                                >
                                    <option value="">Qualité du demandeur</option>
                                    <option value="Individu">Individu</option>
                                    <option value="Architecte">Architecte</option>
                                    <option value="Autre">Autre</option>
                                </select>
                                {errors.qualite_demandeur && <span>This field is required</span>}
                            </div>
                            <div className="col-6">
                                <div className="form-check form-switch">
                                    <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            id="flexSwitchCheckChecked" 
                                            defaultChecked={true}
                                            {...register("est_proprietaire", { required: true })}
                                    />
                                    <label 
                                            className="form-check-label" 
                                            htmlFor="flexSwitchCheckChecked">Vous êtes propriétaire ?
                                    </label>
                                    {errors.est_proprietaire && <span>This field is required</span>}
                                </div>
                            </div>
                            <div className="col-6">
                                <input 
                                        className="form-control" 
                                        type="text"
                                        {...register("nature_projet", { required: true })} 
                                        placeholder="Nature du projet envisagé"
                                />
                                {errors.nature_projet && <span>This field is required</span>}
                            </div>
                            <div className="col-6">
                                <select 
                                        className="form-select"
                                        {...register("type_foncier", { required: true })}
                                >
                                    <option value="">Type du foncier</option>
                                    <option value="Non immatriculé">Non immatriculé</option>
                                    <option value="TF">Immatriculé</option>
                                    <option value="R">Réquisition</option>
                                </select>
                                {errors.type_foncier && <span>This field is required</span>}
                            </div>
                            {
                                isNonImmatricule_Selected ?
                                null
                                :
                                (
                                    <div className="col-6">
                                        <input 
                                                className="form-control" 
                                                type="text"
                                                {...register("reference_fonciere", { required: true })} 
                                                placeholder="Référence foncière"
                                        />
                                        {errors.reference_fonciere && <span>This field is required</span>}
                                    </div>
                                )
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

export default DemandeurForm;