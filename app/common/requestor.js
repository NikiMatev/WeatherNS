"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get(url) {
    return fetch(url).then(function (response) {
        return response.json();
    }).then(function (json) {
        return json;
    });
}
exports.get = get;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVxdWVzdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsYUFBb0IsR0FBRztJQUNyQixNQUFNLENBQUMsS0FBSyxDQUNWLEdBQUcsQ0FDSixDQUFDLElBQUksQ0FBQyxVQUFTLFFBQVE7UUFDdEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFSRCxrQkFRQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXQodXJsKXtcbiAgcmV0dXJuIGZldGNoKFxuICAgIHVybFxuICApLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH0pLnRoZW4oZnVuY3Rpb24oanNvbil7XG4gICAgcmV0dXJuIGpzb247XG4gIH0pO1xufVxuIl19