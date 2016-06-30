#Trial Chain Chaincodes

This folder contains chaincodes for Distributed Databases for Rare Diseases: A Preliminary Design.

###Trial Registry
Uses type TrialRegistryHashMap struct to define TrialRegistryHash, and clinicPubKey variables. 
  - _TrialDescriptionHash_ - Is the hash of the URL of trial in question.
  - _trialPubKey_ - Is the public key for the clinic conducting a trial. Each clinic has unique public per trial.
  
Contains functions for deploying, invoking and querying the chaincode from a peer. 

  - _Deploy_ - Deploys the chaincode, intializes trialDescriptionHash key and its value.
  - _Invoke_
      - addEntry - Adds TrialRegistryHash/clinicPubKey in the ledger. Takes care of duplicate keys and values.
      - removeEntry - Removes entry from the ledger.
  - _Query_ - Returns the corresponding clinicPubKey for every every trialDescriptionHash queried.
      - getTrialClinics - Queries all clinics for a particular trialDescriptionHash
      - getTrials - Lists all ongoing trials by their trialDescriptionHash
  
###RecordXYZ
