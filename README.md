# betterneptun
Mini neptun alkalmazás megvalósítása:
- Szerepkörök(STUDENT,TEACHER,ADMIN)
- STUDENT jogosultságai:
  - COURSE-ok listázása
  - COURSE-ok szűrése
  - COURSE-ok felvétele
  - COURSE-ok leadása
  - felvett COURSE-ok listázása
  - saját adatok módosítása
- TEACHER jogosultságai:
  - COURSE-ok és CONSULTS-ok hozzáadása
  - COURSE-ok és CONSULTS-ok módosítása
  - COURSE-ok és CONSULTS-ok törlése
  - hozzáadott COURSE-ok és CONSULTS-ok listázása
  - saját adatok módosítása
- ADMIN jogosultságai:
  - minden

Esetleges további funkciók:
- Különböző jelentkezési intervallumok(ELŐ,RANGSOROLT,VERSENY)
- Besorolási módszerek COURSE felvételénél(RANGSORPONT,RANDOMPONT)
- Automatikus üzenet küldése COURSE-ok módosításánál(MESSAGES tábla)

Adatbázis modell:

USERS tábla
ID NAME E-MAIL PASSWORD ROLE

COURSES tábla
ID NAME ROOM TIME TYPE TAKEN_SPACE MAX_SPACE USERS_ID(TEACHER,egy-sok)

USERS_COURSES kapcsoló tábla
USERS_ID(STUDENT,sok-sok) COURSES_ID

CONSULTS tábla
ID NAME ROOM TIME USERS_ID(TEACHER,egy-sok)