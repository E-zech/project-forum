import Joi from 'joi';

export const RoleTypes = {
    none: 10, // non-business user 
    business: 20, // business user
    admin: 30, // admin /manager
    master: 40, // developers
};

export const pages = [
    { route: '/', title: 'Home' },
    { route: '/signup', title: 'Signup' },
    { route: '/login', title: 'Login' },
    { route: '/about', title: 'About' },
    { route: '/contact', title: 'Contact' },
];

export const checkPermissions = (permissions, userRoleType) => {
    return permissions.includes(userRoleType);
};

// example for a route that needs permissions { route: '/user-management', title: 'User Mangement', permissions: [RoleTypes.admin, RoleTypes.master] }

//(use the checkPermissions function where u filter out the pages witout the permissions)


export const signupStructure = [
    { name: 'firstName', type: 'text', label: 'First Name', required: true },
    { name: 'lastName', type: 'text', label: 'Last Name', required: true },
    { name: 'email', type: 'email', label: 'Email', required: true },
    { name: 'password', type: 'password', label: 'Password', required: true },
    { name: 'imgSrc', type: 'text', label: 'imgSrc', required: false },
    { name: 'imgAlt', type: 'text', label: 'imgAlt', required: false },
];

export const signupSchema = Joi.object({
    firstName: Joi.string().min(2).max(30).label('First Name').required(),
    lastName: Joi.string().min(2).max(30).label('Last Name').required(),
    email: Joi.string().email({ tlds: false }).lowercase().trim().label('Email').required(),
    password: Joi.string()
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{9,}$/)
        .message('Password must be 9 characters long and include 1 uppercase letter, 1 lowercase letter, 1 special character, and numbers')
        .label('Password')
        .required(),
    imgSrc: Joi.string().uri().max(600).label('Image Source').allow(''),
    imgAlt: Joi.string().min(5).max(200).label('Image Alternative').allow(''),
}).options({ abortEarly: false });

export const loginStructure = [
    { name: 'email', type: 'email', label: 'Email', required: true },
    { name: 'password', type: 'password', label: 'Password', required: true },
]

export const loginSchema = Joi.object({
    email: Joi.string().email({ tlds: false }).lowercase().trim().label('Email').required(),
    password: Joi.string()
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{9,}$/)
        .message('Password must be 9 characters long and include 1 uppercase letter, 1 lowercase letter, 1 special character, and numbers')
        .label('Password')
        .required(),
}).options({ abortEarly: false });

export const postStructure = [
    { name: 'title', type: 'text', label: 'Title', required: true },
    { name: 'tags', type: 'text', label: 'Tags', required: false },
    { name: 'text', type: 'text', label: 'Text', required: true },
]