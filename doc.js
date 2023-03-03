alert('Здесь вы можете сформировать список учащихся. Следуйте инструкции и все у вас будет тип топ. Улыбайтесь!');
let amount = +prompt('Сколько человек в группе:');
let students = [];
let v = ''
for (let i = 0; i < amount; i++){
    let name = prompt(`Имя ${i + 1} учащегося:`);
    let surName = prompt(`Фамилия ${i + 1} учащегося:`);
    students.push({
        Имя: name,
        Фамилия: surName
    });
    v+=`${i + 1}. ${name} ${surName}\n`
    }
console.log(students);
alert(v)






