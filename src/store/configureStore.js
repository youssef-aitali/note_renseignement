import { configureStore } from "@reduxjs/toolkit";
import reducer from './demande';

export default function configureAppStore() {
    return configureStore({ reducer });
}