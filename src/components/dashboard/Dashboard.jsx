import React from 'react'
import { Redirect } from 'react-router';

export default function Dashboard() {
    let login = false;

    if (!login) {
        return <Redirect to="/login" />
    } else {
        return <div>
            hola dashboard
    </div>
    }
}
