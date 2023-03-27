<template>
    <div class="box-form">
        <form class="form">
            
            <p>Name:</p><input type="text" name="name" placeholder="Your complete name" required><br>

        
            <p>Email:</p><input type="text" name="email" placeholder="Your email" required><br>

            
            <p>Age:</p><input type="number" min="1" max="100" name="age" placeholder="Age" required><br>

            <input type="submit" value="enviar">
        </form>
    </div>
</template>

<script>
export default {
    name: 'Form'
}
</script>