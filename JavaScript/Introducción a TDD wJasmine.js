//crea una prueba o función que devuelva el número más grande del array. Por ejemplo, returnLargest([1,3,10]) debería devolver 10 
//y returnLargest([-2,-5,-10]) debería devolver -2. Una vez que hayas escrito la prueba, ejecútala (sin escribir toda la función 
//para asegurarte de que fallen todas las pruebas), luego completa la función cerciorándote de que pase todas las pruebas.

function max(arr){
    var mayor=arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]>mayor){
            mayor=arr[i];
        }
    }
    return mayor;
}
 

    
describe("max", function() { 
    it("Al ingresar el array [2,5,8], el mayor sería 8", function() { 
        expect(max([2,5,8])).toEqual(8); 
    }); 
    it("Al ingresar el array [-2,-5,-8], el mayor sería -2", function() { 
        expect(max([-2,-5,-8])).toEqual(-2); 
    }); 
    it("Al ingresar el array [-8,3,6], el mayor sería 6", function() { 
        expect(max([-8,3,6])).toEqual(6); 
    }); 
});
    