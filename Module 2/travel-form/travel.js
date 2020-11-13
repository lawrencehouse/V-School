form = document['traveler-info']

form.addEventListener('submit', e => {
    e.preventDefault()
    first_name = form.first_name.value
    last_name = form.last_name.value
    age = form.age.value
    gender = form.gender.value
    country = form.location.value
    checkedDiet = []
    checkedBoxes = document.querySelectorAll('input[name=diet]:checked')
    for (i = 0; i < checkedBoxes.length; i++) {
        checkedDiet.push(checkedBoxes[i].value)
    }
    alert(`First name: ${first_name}\nLast name: ${last_name}\nAge: ${age}\nGender: ${gender}\nLocation: ${country}\nDietary restrictions: ${checkedDiet}`)
})