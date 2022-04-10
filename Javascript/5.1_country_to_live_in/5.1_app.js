function contryToLiveIn(language, island, population, country) {
  if (language === "English" && island === false && population < 50000000) {
    console.log(`You should live in ${country}`);
  } else {
    console.log(`${country} does not meet your criteria`);
  }
}

contryToLiveIn("English", false, 38000000, "Canada");
contryToLiveIn("Hebrew", false, 8000000, "Israel");
