

function formaName (user){
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'perez'
};


// const name = 'Josh Peres';
const element = <h1>Hello, {formaName(user)}!</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
)
