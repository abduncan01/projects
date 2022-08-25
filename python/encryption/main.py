import random
import time


key = int(input("Enter a key integer.\n"))

#letters array is copied into another array cipher and shuffled
letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]
cipher = letters.copy()
print()
random.seed(key)
random.shuffle(cipher)

#Encrypt text input
text = input("Enter LOWERCASE plaintext text.\n")
encrypted = ""

for a in range(0, len(text)):
  if text[a] == " ":
    encrypted = encrypted + " "
  else:
    for b in range(0,26):
      if text[a] == letters[b]:
        encrypted = encrypted + cipher[b]


print("\nplaintext message = " + text)
print("\nencrypted message = " + encrypted + "\n\n")

#Decrypt text  
encrypt = input("Enter encrypted text to be decrypted:\n")
decrypt = ""

for a in range(0, len(encrypt)):
    if encrypt[a] == " ":
        decrypt = decrypt + " "
    else:
        for b in range(0,26):
            if encrypt[a] == cipher[b]:
                decrypt = decrypt + letters[b]


print("\nencrypted message = " + encrypt)
print("plaintext message = " + decrypt + "\n")

#frequency analysis
print("Calculating letter frequency of specified file.. (Wait a moment)")
with open("sample.txt", "r+") as file1:
    textfile=file1.read()

    encryptedfile= ""

    for a in range(0, len(textfile)):
        if textfile[a] == " ":
            encryptedfile = encryptedfile + " "
        else:
            for b in range(0,26):
                if textfile[a] == letters[b]:
                    encryptedfile = encryptedfile + cipher[b]

    frequency = list(range(26))
    for a in range(0,26):
        frequency[a] = 0

    for a in range(0,len(encryptedfile)):
        for b in range(0,26):
            if encryptedfile[a] == letters[b]:
                frequency[b] = frequency[b]+1

    newfile=open("new.txt","w+")

    newfile.write(encryptedfile)

    frequency2=[]
    for number in frequency:
        frequency2.append(number/len(textfile))

    def sort_zip(list1, list2):
        zippair = zip(list2, list1)
        z = [a for _, a in sorted(zippair)]
        return z


    format=sort_zip(letters,frequency)

    frequency2.sort()

    output = "\n".join("Frequency of letter {} : {}".format(a, b) for a, b in zip(format, frequency2))

    print(output)
    time.sleep(1)
    print("Program ends here")
