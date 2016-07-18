##Trial-chain Web App Workflow

###Patient Portal

1. Patient Login
    - Patient logins to the Patient Portal
        Input: Record Hash, Patient Public Key

2. Patient Actions Page 
    - Read Trial Registry
    - Authorize Record
    - Revoke Authorization
    - Logout 

###Clinic Portal

1. Create EHR
    - Generate Record Hash 
        - Input: EHR file, Patient Public Key
        - Output: Record Hash
    
2. Upload Pending EHR (Requires Admin Access)
    - Deploy Record Chaincode 
    - Call Link Record 
        - Input: Patient Public Key, Record Hash, Chaincode ID
        - Output: Message ID
    - Post EHR on IPFS Network
        - Input: EHR file 

3. Scan Blockchain
    - Input: Clinic Public Key
    - Output: Populate all record hash of the chaincodes referencing the Clinic Public Key

4. Retrieve Authorized EHR from IPFS Network
    - Input: Record Hash
    - Output: EHR file 

5. Post a Message on IPFS
    - Input: Message Text, owner Public Key
    - Output: Message Hash

6. Notify 
    - Input: Message Hash, Record Hash
    - Action: Call notify on Record chaincode
    - Ouput: Message Hash

###To Do UI related tasks

1. Implement Notify on Patient Portal
