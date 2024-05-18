export const actions = {
    async create({ request }) {
        const data = await request.formData();
        const username = data.get('username');
        const nombre = data.get('nombre');
        const apellido = data.get('apellido');
        const correo = data.get('correo');
        const telefono = data.get('telefono'); 
        const password = data.get('password');

        if (!username || !nombre || !apellido || !correo || !password) {
            console.log("cagada")
            return {
                status: 400,
                body: { error: 'Todos los campos obligatorios deben estar llenos' }
            };
        }
        
        console.log({username, nombre, apellido, correo, password});

        return {
            status: 200,
            body: { success: true }
        };
    }
};