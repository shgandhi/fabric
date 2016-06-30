#Trial Chain Chaincodes

This folder contains chaincodes for Distributed Databases for Rare Diseases: A Preliminary Design.

###Trial Registry
Uses type TrialRegistryHashMap struct to define TrialRegistryHash, and clinicPubKey variables. 
  - _TrialRegistryHash_ - Is the hash of the URL of trial in question.
  - _clinicPubKey_ - Is the public key for the clinic conducting a trial. Each clinic has unique public per trial.
  
Contains functions for deploying, invoking and querying the chaincode from a peer. 

  - _Deploy Chaincode_ - Deploys the chaincode, intializes fields
  - _Invoke Chaincode_
      - addEntry - Adds TrialRegistryHash/clinicPubKey in the ledger. Takes care of duplicate keys and values.
      - removeEntry - Removes entry from the ledger.
  - _Query Chaincode_ - Returns the corresponding clinicPubKey for every every trialDescriptionHash queried.
  
###RecordXYZ
