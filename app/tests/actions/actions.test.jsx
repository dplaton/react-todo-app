var expect = require('expect');
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import firebase, {firebaseRef} from 'app/firebase'

var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
    it('should generate the set search term action', () => {
        var expectedAction = {
            type: 'SET_SEARCH_TERM',
            searchTerm: 'test'
        }

        var actualAction = actions.setSearchTerm('test');

        expect(actualAction).toEqual(expectedAction);
    });

    it('should generate the "toggle show completed" action', () => {
        var expectedAction = {
            type: 'TOGGLE_SHOW_COMPLETED'
        }

        var actualAction = actions.toggleShowCompleted();

        expect(actualAction).toEqual(expectedAction);
    });
    it('should generate the "Add Todo" action', () => {
        var expectedAction = {
            type: 'ADD_TODO',
            todo: {
                id: '123asd',
                text: 'test',
                completed: false,
                createdAt: 1
            }
        }

        var actualAction = actions.addTodo(expectedAction.todo);

        expect(actualAction).toEqual(expectedAction);
    });

    it('should create todo and dispatch ADD_TODO', (done) => {
        const store = createMockStore({});
        const todoText = 'test';

        store
            .dispatch(actions.startAddTodo(todoText))
            .then(() => {
                const actions = store.getActions();
                expect(actions[0]).toInclude({type: 'ADD_TODO'});

                expect(actions[0].todo).toInclude({text: todoText})
                done();
            })
            .catch(done);
    });

    it('should generate the "update todo" action', () => {
        var expectedAction = {
            type: 'UPDATE_TODO',
            id: 1,
            updates: {
                completed: false
            }
        }

        var actualAction = actions.updateTodo(expectedAction.id, expectedAction.updates);

        expect(actualAction).toEqual(expectedAction);
    });

    it('should generate the "add todos" action', () => {
        var expectedAction = {
            type: 'ADD_TODOS',
            todos: [1, 2, 3]
        }

        var actualAction = actions.addTodos([1, 2, 3]);

        expect(actualAction).toEqual(expectedAction);
    });

    describe('Tests with Firebase todos', () => {
        var testTodoRef;
        beforeEach((done) => {
            var todosRef = firebaseRef.child('todos');
            todosRef.remove().then(() => {
                firebaseRef.child('todos').push();
                return testTodoRef.set({text: 'Test', completed: false, createdAt: 1234})
                                    .then(() => done())
            })
            .catch(done);

            testTodoRef= firebaseRef.child('todos');

        });

        afterEach((done) => {
            testTodoRef
                .remove()
                .then(() => done());
        });

        it('should toggle todo and dispatch UPDATE_TODO actions', (done) => {
            const store = createMockStore();
            const action = actions.startToggleTodo(testTodoRef.key, true);

            store.dispatch(action).then(()=>{
                const mockActions = store.getActions();
                
                expect(mockActions[0]).toInclude({
                    type:'UPDATE_TODO',
                    id: testTodoRef.key
                })

                expert(mockActions[0]).toInclude({
                    completed:true
                });

                expect(mockActions[0].updates.completedAt).toBeA('number');
            }, done());
        });

        it('should start adding todos and dispatch "ADD_TODOS" action', (done) => {
            const store = createMockStore();
            const action = actions.startAddTodos();

            store.dispatch(action).then(()=>{
                const mockActions = store.getActions();
                console.log('Store has these actions: ', mockActions)

                expect(mockActions[0].toInclude({
                    type:'ADD_TODOS'
                }));

                expect(mockActions[0].todos.length).toBe(1);
                expect(mockActions[0].todos[0].text).toBe();
            }, done());
            
        });

        it('should generate the LOGIN action', () => {
            const action = {
                type:'LOGIN',
                uid:123
            }

            var actualAction = actions.login(123);
            expect(actualAction).toEqual(action)
        });
        
        it('should generate the LOGOUT action', () => {
            const action = {
                type:'LOGOUT'
            }

            var actualAction = actions.logout();
            expect(actualAction).toEqual(action)
        });
    })
})