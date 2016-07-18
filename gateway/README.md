# Trial-chain Web Application
The web application has two components - _patient portal_ and _clinic portal_. The patient portal or the gateway handles the patient interaction with the blockchain chaincodes _Trial Registry_ and _RecordXYZ_. The clinic portal is used to manage clinic interaction with both the chaincodes.

## Workflow
> Describes the workflow of the patient and the clinic portals

### Patient Portal
> The patient portal is divided into two views -

#### Patient Login
Patient logs in to the Patient Portal
```
Input: Record Hash, Patient Public Key
```

#### Patient Actions Page
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

### Clinic Portal
> The clinic set activities can be grouped into four categories.

#### Create EHR
  - Generate Record Hash 
```
Input: EHR file in pdf format, Patient Public Key
Output: Record Hash
```
    
  - Deploy Record Chaincode 
```
Input: Record Hash, Patient Public Key
```
    
  - Call Link Record 
```
Input: Record Hash, Patient Public Key
```
  
  - Upload EHR on IPFS Network
```
Input: EHR file
```

#### Scan Blockchain
> The clinic periodically scans the blockchain for
new blocks that contain its clinicPubKey . Once it finds one, it identifies the chaincode
RecordXYZ that references it, notes down the associated recordHash and requests
the EHR with that hash from the IPFS network.

```
Input: Clinic Public Key
Output: List of Record hashes
```

#### Retrieve Authorized EHR from IPFS Network
```
Input: Record Hash
Output: EHR file 
```

#### Post a Message on IPFS
```
Input: Message Text, owner Public Key
Output: Message Hash
```

#### Notify 
```
Input: Message Hash, Record Hash
Ouput: Message Hash
```

#### To Do UI related tasks

1. Implement Notify on Patient Portal
2. Validate all input fields
3. Get upload file buttons working
