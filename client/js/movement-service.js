const BASE_URL = '/api/v1';

async function getLast() {
    const resp = await fetch(`${BASE_URL}/movements`);
    const { movements } = await resp.json();
    return movements.reverse();
}

async function getIncomes() {
    const resp = await fetch(`${BASE_URL}/movements?type=income`);
    const { movements } = await resp.json();
    return movements;
}

async function update(movement) {
    const resp = await fetch(`${BASE_URL}/movements/${movement.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movement),
    });

    return resp.json();
}

async function create(movement) {
    const resp = await fetch(`${BASE_URL}/movements`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movement),
        
    });
    alert("Movimiento creado con éxito!!");
    return resp.json();
}

async function remove(movement) {
    const resp = await fetch(`${BASE_URL}/movements/${movement.id}`, {
        method: 'DELETE',
        
    });
    return resp.json();
}

export default {
    create,
    update,
    remove,
    getLast,
    getIncomes,
};
