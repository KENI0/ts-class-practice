class apple {
  public static BANANA = "salty"
  public static fruit() {
    console.log('fruits yummy', apple.BANANA)
  } 
}

const a = new apple();

apple.fruit(); // 'fruits yummy salty'

a.fruit();

