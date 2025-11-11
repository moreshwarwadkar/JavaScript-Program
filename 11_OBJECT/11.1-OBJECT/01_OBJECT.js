// let courses = [
//     {
//         course_id: 1,
//         course_price: 0,
//         branch: 'Hadpsar',
//         skill: ['HTML', 'CSS', 'JS'],
//         course_offered: ['JAVA-FULLSTACK', 'PYTHON-FULLSTACK', 'TESTING'],
//     },

//     {
//         course_id: 2,
//         course_price: 0,
//         branch: 'BTM',
//         skill: ['JAVA', 'SELENIUM', 'SQL'],
//         course_offered: ['DEVOPS','AWS','FIREBASE'],
//     },
// ]

// courses.map((v)=>{
//     v.skill.map((a)=>{
//         console.log(a);        
//     })
// })

/*
OP: 

HTML
CSS
JS
JAVA
SELENIUM
SQL
*/


// let courses = [
//     {
//         course_id: 1,
//         course_price: 0,
//         branch: 'Hadpsar',
//         skill: ['HTML', 'CSS', 'JS'],
//         rating : {
//             HTML: '*',
//             CSS: '1',
//             JS : '2'
//         },
//         course_offered: ['JAVA-FULLSTACK', 'PYTHON-FULLSTACK', 'TESTING'],
//     },

//     {
//         course_id: 2,
//         course_price: 0,
//         branch: 'Hadpsar',
//         skill: ['JAVA', 'SELENIUM', 'SQL'],
//         rating : {
//             HTML: '2',
//             CSS: '1',
//             JS : '2'
//         },
//         course_offered: ['DEVOPS','AWS','FIREBASE'],
//     }
// ]

// courses.map((v,i)=>{ 
//     console.log(v.rating.HTML,i);
// })
/*

OP : * 1
     2 1

-> IN MAP ALSO WE CAN PASS ANOTHER ARGUMENT.
-> HERE WE HAVE PASS 'i', SO IT WILL PRINT INDEX NUMBER.
*/



let courses = {

    data: [
        {
            course_id: 1,
            course_price: 0,
            branch: 'Hadpsar',
            skill: ['HTML', 'CSS', 'JS'],
            rating: {
                HTML: '*',
                CSS: '1',
                JS: '2'
            },
            course_offered: ['JAVA-FULLSTACK', 'PYTHON-FULLSTACK', 'TESTING'],
        },

        {
            course_id: 2,
            course_price: 0,
            branch: 'Hadpsar',
            skill: ['JAVA', 'SELENIUM', 'SQL'],
            rating: {
                HTML: '2',
                CSS: '1',
                JS: '2'
            },
            course_offered: ['DEVOPS', 'AWS', 'FIREBASE'],
        }
    ]
}

courses.data.map((v)=>{
    v.skill.map((a)=>{
        console.log(a);  
    })  
})