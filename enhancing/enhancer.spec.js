const enhancer = require('./enhancer.js');
// test away!

describe("Enhancer", ()=>{
    describe("repair(item)", ()=>{
        it('Should repair the item', ()=>{
            // setup   -- Arrange
            const expected = {
                name: "theItem",
                durability: 100,
                enhancement: 1
            }

             const testItem = {
                name: "theItem",
                durability: 3,
                enhancement: 1,
            }

             // execution   -- Act
            const actual = enhancer.repair(testItem);

             // assertions   -- Assert
            expect(actual.name).toBe(expected.name)
            expect(actual.durability).toBe(expected.durability)
            expect(actual.enhancement).toBe(expected.enhancement)
        })
    })
    describe("succeed(item)", ()=>{
        it('Should increase item enhancement by 1', ()=>{
            // setup   -- Arrange
            const expected = {
                name: "theItem",
                durability: 100,
                enhancement: 2
            }

             const testItem = {
                name: "theItem",
                durability: 100,
                enhancement: 1,
            }

             // execution   -- Act
            const actual = enhancer.succeed(testItem);

             // assertions   -- Assert
            expect(actual.name).toBe(expected.name)
            expect(actual.durability).toBe(expected.durability)
            expect(actual.enhancement).toBe(expected.enhancement)
        })
        it('Should not change the enhancement level if it is already 20', ()=>{
            // setup   -- Arrange
            const expected = {
                name: "theItem",
                durability: 100,
                enhancement: 20
            }

             const testItem = {
                name: "theItem",
                durability: 100,
                enhancement: 20,
            }

             // execution   -- Act
            const actual = enhancer.succeed(testItem);

             // assertions   -- Assert
            expect(actual.name).toBe(expected.name)
            expect(actual.durability).toBe(expected.durability)
            expect(actual.enhancement).toBe(expected.enhancement)
        })
    })
    describe("fail(item)", ()=>{
        it('Should decrease item durability by 5', ()=>{
            // setup   -- Arrange
            const expected = {
                name: "theItem",
                durability: 95,
                enhancement: 1
            }

             const testItem = {
                name: "theItem",
                durability: 100,
                enhancement: 1,
            }

             // execution   -- Act
            const actual = enhancer.fail(testItem);

             // assertions   -- Assert
            expect(actual.name).toBe(expected.name)
            expect(actual.durability).toBe(expected.durability)
            expect(actual.enhancement).toBe(expected.enhancement)
        })
        it('Should decrease item durability by 10', ()=>{
            // setup   -- Arrange
            const expected = {
                name: "theItem",
                durability: 90,
                enhancement: 15
            }

             const testItem = {
                name: "theItem",
                durability: 100,
                enhancement: 15,
            }

             // execution   -- Act
            const actual = enhancer.fail(testItem);

             // assertions   -- Assert
            expect(actual.name).toBe(expected.name)
            expect(actual.durability).toBe(expected.durability)
            expect(actual.enhancement).toBe(expected.enhancement)
        })
        it('Should decrease item durability by 10 and the enhancement by 1', ()=>{
            // setup   -- Arrange
            const expected = {
                name: "theItem",
                durability: 90,
                enhancement: 19,
            }

             const testItem = {
                name: "theItem",
                durability: 100,
                enhancement: 20,
            }

             // execution   -- Act
            const actual = enhancer.fail(testItem);

             // assertions   -- Assert
            expect(actual.name).toBe(expected.name)
            expect(actual.durability).toBe(expected.durability)
            expect(actual.enhancement).toBe(expected.enhancement)
        })
    })
    describe("get(item)", ()=>{
        it('Should not change the name', ()=>{
            // setup   -- Arrange
            const expected = {
                name: "theItem",
                durability: 100,
                enhancement: 0
            }

             const testItem = {
                name: "theItem",
                durability: 100,
                enhancement: 0,
            }

             // execution   -- Act
            const actual = enhancer.get(testItem);

             // assertions   -- Assert
            expect(actual.name).toBe(expected.name)
            expect(actual.durability).toBe(expected.durability)
            expect(actual.enhancement).toBe(expected.enhancement)
        })
        it('Should change the name to include enhancement level', ()=>{
            // setup   -- Arrange
            const expected = {
                name: "[20] theItem",
                durability: 100,
                enhancement: 20
            }

             const testItem = {
                name: "theItem",
                durability: 100,
                enhancement: 20,
            }

             // execution   -- Act
            const actual = enhancer.get(testItem);

             // assertions   -- Assert
            expect(actual.name).toBe(expected.name)
            expect(actual.durability).toBe(expected.durability)
            expect(actual.enhancement).toBe(expected.enhancement)
        })
    })
    describe("fixHack(item)", ()=>{
        it('Should correct a hacked item enhancement (positive)', ()=>{
            // setup   -- Arrange
            const expected = {
                name: "theItem",
                durability: 100,
                enhancement: 20
            }

             const testItem = {
                name: "theItem",
                durability: 100,
                enhancement: 1000,
            }

             // execution   -- Act
            const actual = enhancer.fixHack(testItem);

             // assertions   -- Assert
            expect(actual.name).toBe(expected.name)
            expect(actual.durability).toBe(expected.durability)
            expect(actual.enhancement).toBe(expected.enhancement)
        })
        it('Should correct a hacked item enhancement (negative)', ()=>{
            // setup   -- Arrange
            const expected = {
                name: "theItem",
                durability: 100,
                enhancement: 0
            }

             const testItem = {
                name: "theItem",
                durability: 100,
                enhancement: -69, // nice
            }

             // execution   -- Act
            const actual = enhancer.fixHack(testItem);

             // assertions   -- Assert
            expect(actual.name).toBe(expected.name)
            expect(actual.durability).toBe(expected.durability)
            expect(actual.enhancement).toBe(expected.enhancement)
        })
        it('Should correct a hacked item durability (positive)', ()=>{
            // setup   -- Arrange
            const expected = {
                name: "theItem",
                durability: 100,
                enhancement: 20
            }

             const testItem = {
                name: "theItem",
                durability: 10000,
                enhancement: 20,
            }

             // execution   -- Act
            const actual = enhancer.fixHack(testItem);

             // assertions   -- Assert
            expect(actual.name).toBe(expected.name)
            expect(actual.durability).toBe(expected.durability)
            expect(actual.enhancement).toBe(expected.enhancement)
        })
        it('Should correct a hacked item durability (negative)', ()=>{
            // setup   -- Arrange
            const expected = {
                name: "theItem",
                durability: 0,
                enhancement: 20
            }

             const testItem = {
                name: "theItem",
                durability: -420,
                enhancement: 20,
            }

             // execution   -- Act
            const actual = enhancer.fixHack(testItem);

             // assertions   -- Assert
            expect(actual.name).toBe(expected.name)
            expect(actual.durability).toBe(expected.durability)
            expect(actual.enhancement).toBe(expected.enhancement)
        })
    })
}) 