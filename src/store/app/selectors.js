
export const selectScreenName = (state) => (state.app.screen);
export const selectProducts = (state) => (state.app.products);
export const selectProduct = (state, id) => (state.app.products.find(({id: _id}) => (id === _id)));
export const selectUsers = (state) => (state.app.users);
export const selectBalance = (state) => (state.app.balance);