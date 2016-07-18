# Trial-chain Web Application
The web application has two components - _patient portal_ and _clinic portal_. The patient portal or the gateway handles the patient interaction with the blockchain chaincodes _Trial Registry_ and _RecordXYZ_. The clinic portal is used to manage clinic interaction with both the chaincodes.

## Workflow
> Describes the workflow of the patient and the clinic portals

#### Patient Portal
> The patient portal is divided into two views

##### Patient Login
Patient logs in to the Patient Portal
```
Input: Record Hash, Patient Public Key
```

##### Patient Actions Page
  - Read Trial Registry
    ```
    Input: Trial Description Hash
    Output: Corresponding Trial OR List of all trials
    ```
    
  - Authorize Record
    ```
    Input: Clinic Public Key
    ```
    
  - Revoke Authorization
    ```
    Input: Clinic Public Key
    ```
    
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
