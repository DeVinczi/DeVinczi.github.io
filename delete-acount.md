---
title: "Usunięcie konta"
permalink: /delete-account/
---

## Jak usunąć konto

1. Zaloguj się w aplikacji „Centrum Treningowe”.  
2. Przejdź do **Profil** → **Szybkie Akcje** → **Usuń konto**.  
3. Upewnij się, że wszystkie płatności przez Stripe są uregulowane.  
   - W przypadku zaległych płatności operacja jest zablokowana.  
4. Potwierdź chęć usunięcia konta.

## Zakres usuwanych danych

Po potwierdzeniu usunięcia usuwamy z Firestore:
- Dane dzieci (imię, nazwisko, data urodzenia)  
- Dane rodzica (imię, nazwisko, e-mail, telefon)  
- Historię płatności i subskrypcji Stripe  
- Pozostałe dane powiązane z kontem

**Wyjątek:** dane księgowe przechowywane zgodnie z wymogami prawnymi (do 5 lat).
