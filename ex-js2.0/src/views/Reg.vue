<template>
<div class="card">

    <h3 class="rubrik">
        <strong>Registrera dig</strong>
    </h3>

    <div class="form">

        <form class="text-center" action="#!">

            <div class="form-row">
                <div class="col">
                    <div class="md-form">
                        <label for="materialRegisterFormFirstName">Förnamn:</label>
                        <input type="text" id="materialRegisterFormFirstName" @keyup.a="logName" class="form-control">
                    </div>
                </div>
                <div class="col">
                    <div class="md-form">
                        <label for="materialRegisterFormLastName">Efternamn:</label>
                        <input type="text" id="materialRegisterFormLastName" class="form-control"> 
                    </div>
                </div>
            </div>

            <div class="md-form mt-0">
                <label for="materialRegisterFormEmail">E-mail:</label>
                <input type="email" id="materialRegisterFormEmail" class="form-control">
            </div>

            <div class="md-form">
                <label for="materialRegisterFormPassword">Lösenord:</label>
                <div class="extrainfo">
                    <input type="password" id="materialRegisterFormPassword" class="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock">
                    <small id="materialRegisterFormPasswordHelpBlock" class="small">
                    Minst 8 bokstäver och 1 siffra
                    </small>
                </div>
                
            </div>

            <div class="md-form">
                <label for="materialRegisterFormPhone">Mobil nummer:</label>
                <div class="extrainfo">
                    <input type="password" id="materialRegisterFormPhone" class="form-control" aria-describedby="materialRegisterFormPhoneHelpBlock">
                    <small id="materialRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
                    Valfri - tvåstegs verifiering
                    </small>
                </div>

            </div>

            <button class="subbtn" type="submit">Registrera dig</button>

            <hr>

        </form>
    </div>
</div>
</template>

<script>
export default {
  methods: {
    logName(e) {
      console.log(e.key)
    }
  }
}
</script>

<style>
.extrainfo {
    display: grid;
    grid-template-rows: 1fr 1fr;
}


</style>