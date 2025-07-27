#!/bin/bash

# Magyarországon elérhető autómárkák bővített és kiegészített listája
# A lista a népszerű, prémium, réteg, új és régebbi márkákat is igyekszik lefedni.

markak=(
    "Abarth"
    "Aiways"
    "Alfa Romeo"
    "Alpine"
    "Aston Martin"
    "Audi"
    "Bentley"
    "BMW"
    "Brilliance" # Régebbi, kevésbé elterjedt
    "BYD"
    "Cadillac" # Réteg import
    "Chevrolet" # Korábban hivatalosan forgalmazott, ma is jelen van
    "Chrysler" # Korábban forgalmazott
    "Citroën"
    "Cupra"
    "Dacia"
    "Daewoo" # Régebbi, ma már Chevrolet/GM
    "Daihatsu" # Korábban forgalmazott
    "DFSK"
    "Dodge" # Réteg import
    "Dongfeng" # Új belépő
    "DS Automobiles"
    "Ferrari"
    "Fiat"
    "Fisker" # Új elektromos
    "Ford"
    "Genesis" # Új prémium
    "GWM (Great Wall Motor)"
    "Honda"
    "Hummer" # Réteg import
    "Hyundai"
    "Ineos"
    "Infiniti" # Kivonult, de még fellelhető
    "Isuzu"
    "Iveco" # Főként haszongépjármű, de személyszállítók is
    "JAC"
    "Jaguar"
    "Jeep"
    "Karsan" # Főként haszongépjármű
    "Kia"
    "Lada" # Nagy visszatérő volt, most leállt az import
    "Lamborghini"
    "Lancia" # Korábban forgalmazott, visszatérhet
    "Land Rover"
    "Leapmotor"
    "Lexus"
    "Lincoln" # Réteg import
    "Lotus"
    "Mahindra" # Korábban forgalmazott
    "Maserati"
    "Maxus"
    "Mazda"
    "McLaren"
    "Mercedes-Benz"
    "MG"
    "Mini"
    "Mitsubishi"
    "Nio"
    "Nissan"
    "Omoda"
    "Opel"
    "Peugeot"
    "Polestar"
    "Porsche"
    "Renault"
    "Rolls-Royce"
    "Rover" # Megszűnt, de sok fut még
    "Saab" # Megszűnt, de sok fut még
    "Seat"
    "Seres"
    "Skoda"
    "Smart"
    "SsangYong"
    "Subaru"
    "Suzuki"
    "Tata" # Korábban forgalmazott
    "Tesla"
    "Toyota"
    "Uaz" # Terepjárók
    "Volkswagen"
    "Volvo"
    "Voyah"
    "XPeng"
    "Zhidou"
)

# Ciklus, ami végigmegy a márkák listáján
for marka in "${markak[@]}"
do
    # Létrehozza a mappát a márka nevével
    # A "-p" opció biztosítja, hogy nem lesz hiba, ha a mappa már létezik
    mkdir -p "$marka"
    # Létrehoz egy üres .gitkeep fájlt a mappában
    touch "$marka/.gitkeep"
    echo "Mappa létrehozva/frissítve: $marka"
done

echo "Kész! Az összes autómárka mappája elkészült egy .gitkeep fájllal."