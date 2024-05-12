export const validateLogin = (inputs) => {
    return (!inputs.username || !inputs.password)
}