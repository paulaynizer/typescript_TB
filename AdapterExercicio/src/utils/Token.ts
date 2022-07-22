export default class Token{

    private _token : string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiUGF1bGEiLCJkaXNjaXBsaW5hIjoiUE9PSUlJIiwidHVybWEiOjJ9.mydLwd4dv3YMbPCYQnw2nd5l55IC6GAjODgVkjCk2Vk";

    get token() : string{
        return this._token;
    }
}