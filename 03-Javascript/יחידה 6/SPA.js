const app = {
    main: undefined,
    currentUser: undefined,

    init() {
        app.main = document.getElementById("app");

        app.main.append(document.getElementById("login").content.cloneNode(true));
        history.replaceState({}, '', '#login');

        app.refreshLinks();

        window.addEventListener('popstate', app.popIn);
    },

    changePage(e) {
        e.preventDefault();
        const targetPage = e.target.getAttribute("page-target");
        app.main.innerHTML = '';
        app.main.append(document.getElementById(targetPage).content.cloneNode(true));
        history.pushState({}, targetPage, `#${targetPage}`);
        app.refreshLinks();
    },

    popIn(e) {
        let hash = location.hash.replace('#', '');
        app.main.innerHTML = '';
        app.main.append(document.getElementById(hash).content.cloneNode(true));
        app.refreshLinks();
    },

    formSubmit(e) {
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        const formType = e.target.getAttribute("id");
        if (formType === "login-form") {
            app.login(formProps, e);
        } else if (formType === "register-form"){
            app.register(formProps, e)
        }
    },

    login(formProps, submitEvent) {
        if (this.data.userExists(formProps.name) && this.data.getUserObj().password){
            this.currentUser = formProps.name;
            app.changePage(submitEvent);
        }
    },

    register(formProps, submitEvent) {
        console.log("reg");
        app.changePage(submitEvent);
    },

    refreshLinks() {
        document.querySelectorAll("a").forEach((a) => {
            a.addEventListener('click', app.changePage);
        })
        document.querySelectorAll("form").forEach((form) => {
            form.addEventListener('submit', app.formSubmit);
        })

    },

    data: {
        dbname: 'database',
        
        getUsers() {
            return JSON.parse(localStorage.getItem(this.dbname));
        },

        getUserObj(user) {
            return this.getUsers()[user];
        },
        
        userExists(user) {
            if (this.getUserObj(user)) {
                return true;
            } else {
                console.error("There is no user called " + user);
                return false;
            }
        },

        addNewUser(user) {
            if (!this.userExists(user)) {
                const db = this.getUsers();
                db[user] = {};
                localStorage.setItem(this.dbname, JSON.stringify(db));
            }
        },

        setProp(user, prop, value) {
            if (this.userExists(user)) {
                const db = this.getUsers();
                db[user][prop] = value;
                localStorage.setItem(this.dbname, JSON.stringify(db));
            }
        },

        getProp(user, prop) {
            if (this.userExists(user)) {
                const db = this.getUsers();
                return db[user][prop];
            }
        }
    }
}

window.addEventListener('DOMContentLoaded', app.init);